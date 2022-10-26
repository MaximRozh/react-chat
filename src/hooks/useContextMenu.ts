import React from "react";

export const useContextMenu = () => {
  const [anchorPoint, setAnchorPoint] = React.useState({ x: 0, y: 0 });
  const [show, setShow] = React.useState(false);

  const ref = React.useRef(null) as any;

  const handleContextMenu = React.useCallback(
    (event: any) => {
      event.preventDefault();
      if (ref.current.contains(event.target)) {
        const position = { x: event.pageX, y: event.pageY };

        setAnchorPoint(position);
        setShow(true);
      }
    },
    [setAnchorPoint]
  );

  const handleClick = React.useCallback(
    () => (show ? setShow(false) : null),
    [show]
  );

  React.useEffect(() => {
    ref.current.addEventListener("click", handleClick);
    ref.current.addEventListener("contextmenu", handleContextMenu);

    return () => {
      ref.current.removeEventListener("click", handleClick);
      ref.current.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [ref, handleClick, handleContextMenu]);

  return { anchorPoint, show, ref };
};
