export default function HeroSection({ title, subtitle, buttons }) {
    const buttons = props.buttons || [];
    const Button = getComponent('Button');

    return (
        <div className="block">
            <h1 data-sb-field-path=".title">{title}</h1>
            <h3 data-sb-field-path=".subtitle">{subtitle}</h3>
            {buttons.map((button, index) => (
                <Button key={index} {...button} />
            ))}
        </div>
    )
}




