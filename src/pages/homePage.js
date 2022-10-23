import AboutComponent from "../components/homeComponents/aboutComponent";
import BookApointment from "../components/homeComponents/bookApointment";
import CardComponent from "../components/homeComponents/cardComponent";
import CoCComponent from "../components/homeComponents/cocComponent";
import FindDoctorComponent from "../components/homeComponents/findDoctorComponent";
import JumbotronComponent from "../components/homeComponents/jumbotronComponent";
export default function Home() {
	return (
		<>
			<JumbotronComponent/>
			<AboutComponent />
			<CardComponent />
			<FindDoctorComponent />
			<CoCComponent />
			<BookApointment />
		</>
	)
}