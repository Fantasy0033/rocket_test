import './divider.scss';

export const Divider = ({ axis = 'x' }) => {
   return <div className={`divider ${axis}`} />;
};
