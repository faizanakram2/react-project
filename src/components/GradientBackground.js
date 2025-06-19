const GradientBackground = () => {
    return (
        <div
            className="absolute left-0 top-0 -z-10 h-full w-full opacity-20"
            style={{
                backgroundImage: 'linear-gradient(rgb(62, 125, 255) 0%, rgba(62, 125, 255, 0) 100%)'
            }}
        ></div>
    );
};

export default GradientBackground; 