
import {Anton} from 'next/font/google'

const anton = Anton({weight: "400", subsets: ["latin"]});
const Logo = () => {
	return (
		<div className={`block bg-gradient-to-r from-[#0092CB] via-[#2D4F8F] to-[#422774] bg-clip-text text-transparent ${anton.className}`} >
			<div className="text-xl tracking-widest pl-5">Acsenda</div>
			<div className="text-xl tracking-wide">Accounting Club</div>
		</div>
	)
}

export default Logo