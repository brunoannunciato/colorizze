const Footer = ({pallete}) => {
    const {title, author} = pallete
 return (
    <footer className="p-2">
        <p><strong>{title}</strong> by {author}</p>
    </footer>
 )
}

export default Footer