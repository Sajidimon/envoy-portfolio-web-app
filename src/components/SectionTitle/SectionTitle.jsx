

const SectionTitle = ({SectionTitle, sectionDescription}) => {
    return (
        <div className="text-center my-5 text-black">
            <h2 className="mb-2 text-2xl">{SectionTitle}</h2>
            <p className="mt-2">{ sectionDescription}</p>
        </div>
    );
};

export default SectionTitle;