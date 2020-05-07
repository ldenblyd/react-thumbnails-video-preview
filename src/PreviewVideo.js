import React from "react";
import { useState, useEffect } from "react";

export default function PreviewVideo({
  src,
  handleMouseLeave,
  handleMouseEnter,
  imgProps,
  imgError,
  ...customProps
}) {
  const [asError, setAsError] = useState(false);

  useEffect(() => {
    setAsError(false);
  }, [src, setAsError]);

  const enforceCustomeEvent = {
    onMouseLeave: () => {
      if (imgProps.onMouseLeave) imgProps.onMouseLeave();
      if (customProps.onMouseLeave) customProps.onMouseLeave(src);
      handleMouseLeave();
    },
    onMouseEnter: () => {
      if (imgProps.onMouseEnter) imgProps.onMouseEnter();
      if (customProps.onMouseEnter) customProps.onMouseEnter(src);
      handleMouseEnter();
    },
    onError: () => {
      setAsError(true);
      if (imgProps.onError) imgProps.onError();
    }
  };

  return (
    <>
      <img // eslint-disable-line
        {...imgProps}
        {...enforceCustomeEvent}
        src={asError ? imgError : src}
      />
    </>
  );
}
