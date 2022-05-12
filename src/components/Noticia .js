
function Noticia(){

    const noticia={
        titulo:"Titulo de la noticia",
        descripcion:"Descripción de la noticia"
    }
    
    const{titulo,descripcion}=noticia;    

    return (
    <div>
        <h1>{titulo} <br/> {descripcion}</h1>;
    </div>
    )
    
}
export default Noticia;