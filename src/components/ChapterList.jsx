export const ChapterList = ({ data, onSelectChapter, selectedLevel }) => {

    // import start from "../../assets/level/start.png";
    return (
        <div className="level-container">

            {data.map((level) => (

                <div
                    className="level-row"
                    key={level.id}

                    onClick={() =>
                        onSelectChapter(level.id)
                    }
                >

                    <div

                        className={
                            selectedLevel === level.id
                                ? "level-icon active"
                                : "level-icon"
                        }
                    >

                        ▶
                        

                    </div>

                    <div

                        className={
                            selectedLevel === level.id
                                ? "level-card active-card"
                                : "level-card"
                        }
                    >

                        <h3>{level.title}</h3>

                        <p>{level.desc}</p>

                    </div>

                </div>

            ))}

        </div>
    )
}