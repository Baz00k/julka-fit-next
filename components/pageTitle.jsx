function PageTitle({ children, ...props }) {
    return (
        <h1 className='my-4 font-abhaya text-center display-4' {...props} >{children}</h1>
    );
}

export default PageTitle;