const PageWrapper = (props: {children?: React.ReactNode}) => {
  return <main className='pageWrapper'>{props.children}</main>;
};

export default PageWrapper;
