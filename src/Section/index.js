import "./style.css";

const Section = ({title, sectionExtraContent, sectionBody}) => (
    <section className="section__flex">
        <div className="section__header">
            <h2 className="section__title">{title}</h2>
            {sectionExtraContent}
        </div>
        {sectionBody}
    </section>
);

export default Section;