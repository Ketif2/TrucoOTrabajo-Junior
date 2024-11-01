export default function Footer (){
  return (
    <footer className="bg-customOrange py-10">
        <div className="max-w-7xl mx-auto lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-white text-center lg:text-left">

                <div className="lg:col-span-2">
                    <h2 className="text-title1 font-creepster text-black">¿TE ATREVES A PARTICIPAR?</h2>
                    <p className="text-normal font-michroma mt-2 text-black">
                        Estos desafíos están diseñados para despertar tu valentía y superar
                        esos miedos que llevas dentro. ¿Tienes el coraje para enfrentarlos
                        y vencer cada reto que se te presenta? ¡Demuéstralo!
                        Las grandes recompensas están esperando a aquellos que se atreven
                        a desafiar sus propios límites y descubrir su verdadero potencial.

                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-12 items-center lg:items-start">
                <div>
                    <h3 className="text-title1 font-creepster text-black">TRUCOS</h3>
                    <ul className="text-normal font-michroma mt-2 space-y-2 text-black">
                        <li>Estructuras básicas</li>
                        <li>Estilos simples/componentes</li>
                        <li>Lógica básica</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-title1  font-creepster text-black">TRATOS</h3>
                    <ul className="text-normal font-michroma mt-2 space-y-2 text-black">
                        <li>Tutoriales</li>
                        <li>Explicaciones</li>
                        <li>Tips y trucos</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
