export default function CookiesBanner(props) {
    return (
        <div
            style={{
                height: "90vh",
                backgroundColor: "rgba(250,250,250,0.95)",

                // color: "white",
                position: "fixed",
                top: 10,
                left: 10,
                zIndex: 100,
                width: "calc(100vw - 20px)",
            }}
        >
            <h1>Мы собираем куки</h1>
            <button
                style={{
                    height: 50,
                    width: 150,
                    backgroundColor: "red",
                }}
                onClick={() => {
                    props.setShowBanner(false);
                    fetch("/api/hello");
                }}
            >
                Хорошо
            </button>
        </div>
    );
}
