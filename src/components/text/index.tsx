type TextProps = {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'tertiary';
    weight?: 'light' | 'regular' | 'bold';
    align?: 'left' | 'center' | 'right';
    lineHeight?: 'small' | 'medium' | 'large';
    spacing?: 'small' | 'medium' | 'large';
    transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    decoration?: 'underline' | 'line-through' | 'overline' | 'none';
    variant?: 'default' | 'button' | 'caption';
}



const Text = ({
    children,
    size = 'medium',
    color = 'primary',
    weight = 'regular',
    align = 'left',
    lineHeight = 'medium',
    spacing = 'medium',
    transform = 'none',
    decoration = 'none',
    variant = 'default',
}: TextProps) => {
    return <div
    style={{
        fontSize: size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px',
        color: color === 'primary' ? '#000' : color === 'secondary' ? '#fff' : '#000',
        fontWeight: weight === 'light' ? '300' : weight === 'regular' ? '400' : '700',
        textAlign: align,
        lineHeight: lineHeight === 'small' ? '1.2' : lineHeight === 'medium' ? '1.5' : '2',
        letterSpacing: spacing === 'small' ? '0.5px' : spacing === 'medium' ? '1px' : '2px',
        textTransform: transform,
        textDecoration: decoration,
    }}
    >{children}</div>;
}

export default Text