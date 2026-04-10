import Logo from "../common/Logo/Logo";

export default function Loading() {
    return (
        <div className="loading-screen">
            <div className="loading-content">
                <Logo width={200} height={150} color="#fff" />
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
