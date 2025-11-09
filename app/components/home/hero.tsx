import link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-[30vh] flex items-center justify-center bg-blanco text-negro">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold my-12">
                    DNI y pasaporte
                </h1>
                <div className="flex flex-col place-items-center gap-4 mb-12">
                    <a href="https://www.citapreviadnie.es/" target="_blank" rel="noopener noreferrer">
                        <button className="align-self-center bg-azul hover:opacity-80 text-blanco font-bold py-3 px-8 rounded-lg transition duration-300">
                            Pedir cita previa
                        </button>
                    </a>
                </div>
                <div className="flex flex-row gap-4 justify-center">
                    <a href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_001&id_menu=0" target="_blank" rel="noopener noreferrer">
                        <button className="align-self-center bg-azul hover:opacity-80 text-blanco font-medium text-xs py-3 px-8 rounded-lg transition duration-300">
                            Ciudadanos
                        </button>
                    </a>
                    <a href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_051&id_menu=0" target="_blank" rel="noopener noreferrer">
                        <button className="align-self-center bg-azul hover:opacity-80 text-blanco font-medium text-xs py-3 px-8 rounded-lg transition duration-300">
                            Empresas
                        </button>
                    </a>
                    <a href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_052&id_menu=0" target="_blank" rel="noopener noreferrer">
                        <button className="align-self-center bg-azul hover:opacity-80 text-blanco font-medium text-xs py-3 px-8 rounded-lg transition duration-300">
                            Administraciones
                        </button>
                    </a>
                    <a href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_082&id_menu=0" target="_blank" rel="noopener noreferrer">
                        <button className="align-self-center bg-azul hover:opacity-80 text-blanco font-medium text-xs py-3 px-8 rounded-lg transition duration-300">
                            Oficina técnica
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;