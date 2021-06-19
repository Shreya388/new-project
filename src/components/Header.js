const Header = ({ title }) => {
    return (
        <header>
            <div className='container'>
                <h1>{title}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header;