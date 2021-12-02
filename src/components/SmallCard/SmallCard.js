import Style from "../../components/SmallCard/SmallCard.less";
export default function SmallCard(props) {
    return (
        <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
        >
            <div className={Style.card}>
                <div className={Style.left}>
                    <img
                        src={require("../../assets/Ico/logo.png")}
                        className={Style.imgStyle}
                        alt=""
                    />
                </div>
                <div className={Style.right}>
                    <div className={Style.title}>{props.title}</div>
                    <div>{props.description}</div>
                </div>
            </div>
        </a>
    );
}
