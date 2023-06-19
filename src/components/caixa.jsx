function Caixa(props) {
    return (
        <div class="caixa">
            <h2>COMENTÁRIO {props.number}</h2>
            <h6>Texto</h6>
            <p><strong>{props.autor}</strong></p>
        </div>
    )
}
export default Caixa