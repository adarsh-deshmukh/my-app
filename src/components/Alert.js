export default function Alert(props) {
    return (
        props.alertText && <div>
            <div className={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
                <strong>Ahh great</strong> {props.alertText.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
