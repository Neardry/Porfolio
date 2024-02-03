import style from './style.module.css'


function Sobre() {

    return(
        <>
        <section className="container">
            <div data-aos="zoom-in" className='container_sobre'>
                <div  className={style.container_sobre_titulo}>
                    <h2>Sobre</h2>
                </div>
                <div>
                    <p className={style.texto_sobre}>Por amar tecnologia e sempre querer aprender mais decidi buscar uma transição de carreira para esta área que gosto tanto.</p>
                </div>
            </div>
            <div data-aos="fade-right" className='container_sobre container_sobre_reverse'>
                <div className={style.container_sobre_titulo}>
                    <h2>Tecnologias</h2>
                </div>
                <div>
                    <ul className={style.lista_sobre}>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Gulp</li>
                        <li>Grunt</li>
                        <li>AJAX</li>
                        <li>SASS</li>
                        <li>LESS</li>
                        <li>Parcel</li>
                        <li>Git</li>
                        <li>jQuery</li>
                        <li>BootStrap</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Sobre;