import Info from './info';

export default function InfoGroup() {
    return (
        <div className='bg-blanco'>
            <div className="w-[30vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap gap-8 justify-center align-items-center">
            <Info
                title="AVISOS DNI"
                description="Se recuerda a todos los ciudadanos que deben acudir a su cita puntualmente, y también consultar en esta misma página, en el menú “obtención el DNI” o en “PASAPORTE”, los requisitos necesarios para el tipo de tramitación solicitada (foto actualizada, documentación, autorizaciones, etc…)."
                icon={<span>🔔</span>}
                className="mx-2"
            />
            <Info
                title="Nueva aplicación MiDNI"
                description={
                <span>
                    Podrá encontrar más información sobre la nueva app en la <a 
                        href="https://www.midni.gob.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        siguiente dirección
                    </a>.
                </span>
                }
                icon={<span>🔔</span>}
                className="mx-2"
            />
            <Info
                title="AVISOS CITA PREVIA"
                description={
                <span>
                    La PÁGINA OFICIAL para solicitar CITA PREVIA a fin de obtener o renovar tanto su DNI como su Pasaporte es la siguiente dirección web:<br/>
                    <a 
                        href="www.citapreviadnie.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        www.citapreviadnie.es
                    </a>
                </span>
                }
                icon={<span>🔔</span>}
                className="mx-2"
            />
            </div>
        </div>
    )
} 