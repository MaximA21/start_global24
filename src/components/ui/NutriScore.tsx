import React from 'react';

type NutriScoreProps = {
    score: 'A' | 'B' | 'C' | 'D' | 'E';
}

const NutriScore: React.FC<NutriScoreProps> = ({score}) => {
    const scores = ['A', 'B', 'C', 'D', 'E'];


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "110px", //220
            height: "60px" //120
        }}>
            <div style={{
                color: "#7e7e7e",
                fontSize: "10px", //20
                margin: "5px 7px" // 10 15
            }}>ESG-SCORE
            </div>
            <div style={{
                position: "relative",
                height: "36px", //72
                borderRadius: "10px", // 20
                margin: "0 2px" // 0 5
            }}>
                <div style={{
                    display: "flex",
                    alignContent: "stretch",
                    height: "100%"
                }}>
                    {scores.map((s) => (
                        <span style={{
                            flexGrow: "1",
                            textAlign: "center",
                            color: "rgba(255, 255, 255, 0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px", //40
                            fontWeight: "bold",
                            borderRadius: s === "A" ? "10px 0 0 10px" : //20
                                s === "E" ? "0 10px 10px 0" : "",
                            backgroundColor: s === "A" ? "#23823f"
                                : s === "B" ? "#86bd2b"
                                    : s === "C" ? "#facc04"
                                        : s === "D" ? "#ef8102"
                                            : "#e63c07"
                        }}
                              key={s}
                        >
                        {s}
                    </span>
                    ))}
                </div>
                <div className={'score ' + score.toLowerCase()}


                style={{
                    color: "white",
                    width: "23px", //46
                    height: "42px", //85
                    border: "1px solid white", //3
                    position: "absolute",
                    top: "-3px", //-10
                    left: "-3px", //-5
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "26px", //52
                    borderRadius: "11px", //22

                    backgroundColor: score === "A" ? "#23823f"
                        : score === "B" ? "#86bd2b"
                            : score === "C" ? "#facc04"
                                : score === "D" ? "#ef8102"
                                    : "#e63c07",

                    marginLeft: score === "B" ? "23px" //38
                        : score === "C" ? "45px" //81
                            : score === "D" ? "66px" //123
                                : score === "E" ? "90px" //163
                                    : ""

                }}

                >
                    {score}
                </div>
            </div>
        </div>
    );
}

export default NutriScore;