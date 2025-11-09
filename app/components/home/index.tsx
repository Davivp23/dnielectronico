import Dropdown from "./dropdown";
import DropdownItem from "./dropdownItem";

export default function Index() {
    return (
        <div className="py-8 flex flex-col gap-0">
            <Dropdown buttonText="DNI electrónico">
                <DropdownItem title="Ideas básicas" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_100&id_menu=1" />
                <DropdownItem title="Descripción DNIe" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_106&id_menu=1" />
                <DropdownItem title="Descripción DNI 3.0" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_103&id_menu=1" />
                <DropdownItem title="Descripción DNI 4.0" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_110&id_menu=1" />
                <DropdownItem title="Consejos" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_104&id_menu=1" />
            </Dropdown>
            <Dropdown buttonText="Versión física del DNI">
                <DropdownItem title="Obtención del DNI" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_410&id_menu=7_%208" />
                <DropdownItem title="Unidades de Documentación DNI" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_400&id_menu=7" />
                <DropdownItem title="Cita previa" href="https://www.citapreviadnie.es/citaPreviaDni/" />
            </Dropdown>
            <Dropdown buttonText="Versión digital del DNI">
                <DropdownItem title="Información" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_2200&id_menu=16" />
            </Dropdown>
            <Dropdown buttonText="Cómo utilizar el DNI">
                <DropdownItem title="Para qué se puede utilizar" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_280&id_menu=17" />
                <DropdownItem title="Qué hace falta para utilizarlo" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_300&id_menu=17" />
                <DropdownItem title="Verificar que funciona" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_320&id_menu=17" />
                <DropdownItem title="Cambiar el PIN" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_330&id_menu=17" />
                <DropdownItem title="Viajar al Extranjero" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1094&id_menu=17" />
            </Dropdown>
            <Dropdown buttonText="Aplicaciones móviles">
                <DropdownItem title="Qué son" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_033&id_menu=23" />
                <DropdownItem title="Requisitos" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_039&id_menu=23" />
                <DropdownItem title="Cómo utilizarlas" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_034&id_menu=23" />
                <DropdownItem title="Cuáles son" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_035&id_menu=23" />
                <DropdownItem title="Código fuente" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_036&id_menu=23" />
            </Dropdown>
            <Dropdown buttonText="Guía de referencia básica">
                <DropdownItem title="Firma electrónica" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1069&id_menu=29" />
                <DropdownItem title="Implementación NFC DNI 3.0" href="https://www.dnielectronico.es/PDFs/Implementacion_NFC_FNMT.pdf" />
            </Dropdown>
            <Dropdown buttonText="Certificados electrónicos">
                <DropdownItem title="Qué son los certificados electrónicos" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_430&id_menu=32" />
                <DropdownItem title="Renovación de certificados" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1028&id_menu=32" />
                <DropdownItem title="Autoridades de validación" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_800&id_menu=32" />
                <DropdownItem title="Política de certificación" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_501&id_menu=32" />
                <DropdownItem title="Términos y condiciones" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_503&id_menu=32" />
                <DropdownItem title="Declaración de divulgación de PKI (PDS)" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_502&id_menu=32" />
            </Dropdown>
            <Dropdown buttonText="Marco legal del DNIe">
                <DropdownItem title="Marco legal" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1034&id_menu=39" />
            </Dropdown>
            <Dropdown buttonText="Glosario">
                <DropdownItem title="Ir" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_900&id_menu=40" />
            </Dropdown>
            <Dropdown buttonText="Atención al ciudadano">
                <DropdownItem title="Ir" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_2110&id_menu=41" />
            </Dropdown>
            <Dropdown buttonText="Preguntas frecuentes">
                <DropdownItem title="Obtención y renovación" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1002&id_menu=42" />
                <DropdownItem title="Certificados en el DNI" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1004&id_menu=42" />
                <DropdownItem title="Uso del DNI electrónico" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1005&id_menu=42" />
                <DropdownItem title="Aspectos legales" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1006&id_menu=42" />
                <DropdownItem title="Autenticación y firma electrónica" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1007&id_menu=42" />
                <DropdownItem title="Requisitos técnicos" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1009&id_menu=42" />
                <DropdownItem title="Seguridad del DNI" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1010&id_menu=42" />
                <DropdownItem title="Validación de los certificados de DNI" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1011&id_menu=42" />
            </Dropdown>
            <Dropdown buttonText="Recursos">
                <DropdownItem title="Vídeo" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_3003&id_menu=51" />
                <DropdownItem title="Documentos" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_3004&id_menu=51" />
                <DropdownItem title="Fotografías" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_3005&id_menu=51" />
            </Dropdown>
            <Dropdown buttonText="App midni">
                <DropdownItem title="Ir" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_2150&id_menu=55" />
            </Dropdown>
            <Dropdown buttonText="PASAPORTE">
                <DropdownItem title="Cómo es el pasaporte español" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1080&id_menu=56" />
                <DropdownItem title="Quién puede obtener un pasaporte" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1083&id_menu=56" />
                <DropdownItem title="Requisitos para la obtención" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1084&id_menu=56" />
                <DropdownItem title="Validez del pasaporte" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1085&id_menu=56" />
                <DropdownItem title="Tasas" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1086&id_menu=56" />
                <DropdownItem title="Oficinas de expedición" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_400&id_menu=56" />
                <DropdownItem title="Cita previa" href="https://www.citapreviadnie.es/citaPreviaDni/" />
                <DropdownItem title="Trámites en la oficina de expedición" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1089&id_menu=56" />
                <DropdownItem title="Viajes al extranjero" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1094&id_menu=56" />
                <DropdownItem title="Machine Readable Travel Documents" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1093&id_menu=56" />
                <DropdownItem title="Marco legal del pasaporte" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1090&id_menu=56" />
            </Dropdown>
            <Dropdown buttonText="Españoles en el extranjero">
                <DropdownItem title="Ir" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_250&id_menu=68" />
            </Dropdown>
            <Dropdown buttonText="Área de descargas">
                <DropdownItem title="Ir" href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_250&id_menu=68" />
            </Dropdown>
        </div>
    );
}