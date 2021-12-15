import styles from '../styles/InfiniteLoader.module.scss';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from "react-window-infinite-loader";
import GeneratedImage from './GeneratedImage';
import { useState, useEffect } from 'react';

export default function InfiniteLoader_({
    isViewingFull,
    hasNextPage,
    isNextPageLoading,
    data,
    loadNextPage,
}) {
    // console.log(items);
    const [items, setItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [gridItems, setGridItems] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 600);
    }, []);

    useEffect(() => {
        // Create grid data format.
        const out = [];
        for (var i=0;i<data.length;i+=2) {
            var a = [];
            a.push(data[i]);
            if (data.length > i + 1)
                a.push(data[i+1]);
            out.push(a);
        }
        // console.log('isViewingFull: ', isViewingFull, out)
        setGridItems([...out]);
        init(out);
    }, [data]);

    useEffect(() => {
        if (gridItems.length)
            init(gridItems);    
    }, [isViewingFull]);
    
    const init = (out) => {
        
        if (isViewingFull) {
            setItems(data);
            setItemCount(data.length);
        } else {

            setItems(out || [...gridItems]);
            setItemCount(out.length || gridItems.length);
        }
    }

    // useEffect(() => {
    //     console.log(items, itemCount);
    // }, [items])

    // const itemCount = hasNextPage 
    //     ? items.length + 1 
    //     : items.length;
        // console.log('itemCount: ', itemCount)

    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

    const isItemLoaded = index => !hasNextPage || index < items.length;

    const Row = ({ index, style}) => {
        // console.log("itemCount: ", index, style);
        let content;
        if (!isItemLoaded(index)) {
            content = <div style={style}>Show loading image</div>;
        } else {
            // console.log(isViewingFull, items.length, index, items[index]);
            // content = "Show loaded image here!";
            content = <div style={style}>
                <div className={'row ' + styles.grid}>
                    <GeneratedImage 
                        index={index}
                        data={items[index].html //isViewingFull 
                            ? items[index]
                            : items[index][0]} 
                        isViewingFull={isViewingFull} 
                        setLoading={()=>{}}  />
                    { isViewingFull
                        ? <></>
                        : items[index].length > 1 
                            ? <GeneratedImage 
                                index={index}
                                data={items[index][1]} 
                                isViewingFull={false} 
                                setLoading={()=>{}} />
                            : <></>
                    }
                </div>
            </div>
        }
        return content;
    }

    return (
        <div className={styles.InfiniteLoader}>
            <AutoSizer>
                {({ height, width }) => ( 
                    <InfiniteLoader
                        isItemLoaded={isItemLoaded}
                        itemCount={itemCount}
                        loadMoreItems={loadMoreItems}
                    >
                        {({ onItemsRendered, ref }) => (
                            <List
                                onItemsRendered={onItemsRendered}
                                className="List"
                                height={height}
                                itemCount={itemCount}
                                itemSize={isMobile ? 400 : isViewingFull ? 550 : 400}
                                width={width}
                                ref={ref}
                            >
                                {Row}
                            </List>
                        )}            
                    </InfiniteLoader>
                )}
            </AutoSizer>
        </div>
    );
}