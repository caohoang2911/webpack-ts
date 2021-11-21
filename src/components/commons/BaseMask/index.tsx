import './style.scss';
interface Iprops {
  zIndex?: number;
  children?: JSX.Element;
  handleClick?: any;
}
const BaseMask = ({ children, zIndex, handleClick }: Iprops) => {
  return (
    <div onClick={handleClick} className="base-mask" style={{ zIndex: zIndex }}>
      {children}
    </div>
  );
};
BaseMask.defaultProps = {
  zIndex: 1,
};
export default BaseMask;
