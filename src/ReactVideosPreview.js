import React from "react";
import { useState, useEffect } from "react";
import PreviewVideo from "./PreviewVideo";

const MockCell = props => <div className="cell">{props.children}</div>;

export default function ReactVideosPreview({
  list,
  Cell = MockCell,
  imgError,
  imgProps,
  delay = 1000,
  ...customProps
}) {
  const [elemHovered, setElemHovered] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (elemHovered) {
      const clear = setTimeout(() => {
        setImgIndex(imgIndex =>
          elemHovered.thumbs[imgIndex + 1] ? imgIndex + 1 : 0
        );
      }, delay);
      return () => {
        clearTimeout(clear);
      };
    }
  }, [elemHovered, imgIndex, setImgIndex, delay]);

  const handleMouseLeave = () => {
    setImgIndex(0);
    setElemHovered(null);
  };

  const handleMouseEnter = (thumbs, index) => {
    setElemHovered({
      index,
      thumbs
    });
  };

  const displaySrc = (thumbs, index) => {
    return elemHovered?.index === index ? thumbs[imgIndex] : thumbs[0];
  };

  return (
    <>
      {list?.map((el, index) => {
        const {
          cellProps,
          imgProps: imgPropsObj,
          imgError: imgErrorObj,
          imgList
        } = el;

        return (
          <Cell key={index} {...cellProps}>
            <PreviewVideo
              src={displaySrc(imgList, index)}
              handleMouseEnter={() => handleMouseEnter(imgList, index)}
              handleMouseLeave={handleMouseLeave}
              imgProps={{ ...imgProps, ...imgPropsObj }}
              imgError={imgErrorObj || imgError}
              {...customProps}
            />
          </Cell>
        );
      })}
    </>
  );
}
