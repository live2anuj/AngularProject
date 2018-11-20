import { Component,Input, Output,OnInit} from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

import { viewAttached } from '../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  title = 'All about Angular!';
  
  items = [{ name: "Visakhapatnam" }, { name: "Vadodara" }, { name: "Thane" }, { name: "Surat" }, { name: "Pune" }, { name: "Pimpri-Chinchwad" }, { name: "Patna" }, { name: "Nagpur" }, { name: "Mumbai" }, { name: "Madurai[20]" }, { name: "Ludhiana" }, { name: "Lucknow" }, { name: "Kolkata" }, { name: "Kanpur" }, { name: "Jaipur" }, { name: "Indore" }, { name: "Hyderabad" }, { name: "Ghaziabad" }, { name: "Delhi" }, { name: "Coimbatore" }, { name: "Chennai" }, { name: "Bhopal" }, { name: "Bangalore" }, { name: "Ahmedabad" }, { name: "Agra" }, { name: "City" }, { name: "Nashik" }, { name: "Faridabad" }, { name: "Meerut" }, { name: "Rajkot" }, { name: "Kalyan-Dombivali" }, { name: "Vasai-Virar" }, { name: "Varanasi" }, { name: "Srinagar" }, { name: "Aurangabad" }, { name: "Dhanbad" }, { name: "Amritsar" }, { name: "Navi Mumbai" }, { name: "Allahabad" }, { name: "Ranchi" }, { name: "Howrah (city area)" }, { name: "Jabalpur" }, { name: "Gwalior" }, { name: "Vijayawada" }, { name: "Jodhpur" }, { name: "Raipur" }, { name: "Kota[22]" }, { name: "Guwahati" }, { name: "Chandigarh" }, { name: "Solapur" }, { name: "Hubballi-Dharwad" }, { name: "Tiruchirappalli[23]" }, { name: "Bareilly" }, { name: "Mysore" }, { name: "Tiruppur" }, { name: "Gurgaon" }, { name: "Aligarh" }, { name: "Jalandhar" }, { name: "Bhubaneswar" }, { name: "Salem" }, { name: "Mira-Bhayandar" }, { name: "Warangal[24]" }, { name: "Thiruvananthapuram" }, { name: "Guntur[25]" }, { name: "Bhiwandi" }, { name: "Saharanpur" }, { name: "Gorakhpur" }, { name: "Bikaner" }, { name: "Amravati" }, { name: "Noida" }, { name: "Jamshedpur" }, { name: "Bhilai" }, { name: "Cuttack" }, { name: "Firozabad" }, { name: "Kochi" }, { name: "Nellore[26]" }, { name: "Bhavnagar" }, { name: "Dehradun" }, { name: "Durgapur" }, { name: "Asansol" }, { name: "Rourkela" }, { name: "Nanded" }, { name: "Kolhapur" }, { name: "Ajmer" }, { name: "Akola" }, { name: "Gulbarga" }, { name: "Jamnagar" }, { name: "Ujjain" }, { name: "Loni" }, { name: "Siliguri" }, { name: "Jhansi" }, { name: "Ulhasnagar" }, { name: "Jammu[27]" }, { name: "Sangli-Miraj & Kupwad" }, { name: "Mangalore" }, { name: "Erode[28]" }, { name: "Belgaum" }, { name: "Ambattur" }, { name: "Tirunelveli" }, { name: "Malegaon" }, { name: "Gaya" }, { name: "Jalgaon" }, { name: "Udaipur" }, { name: "Maheshtala" }, { name: "Davanagere" }, { name: "Kozhikode" }, { name: "Kurnool" }, { name: "Rajpur Sonarpur" }, { name: "Rajahmundry[29][30]" }, { name: "Bokaro" }, { name: "South Dumdum" }, { name: "Bellary" }, { name: "Patiala" }, { name: "Gopalpur" }, { name: "Agartala" }, { name: "Bhagalpur" }, { name: "Muzaffarnagar" }, { name: "Bhatpara" }, { name: "Panihati" }, { name: "Latur" }, { name: "Dhule" }, { name: "Tirupati[31]" }, { name: "Rohtak" }, { name: "Korba" }, { name: "Bhilwara" }, { name: "Berhampur" }, { name: "Muzaffarpur" }, { name: "Ahmednagar" }, { name: "Mathura" }, { name: "Kollam" }, { name: "Avadi" }, { name: "Kadapa" }, { name: "Kamarhati" }, { name: "Sambalpur" }, { name: "Bilaspur" }, { name: "Shahjahanpur" }, { name: "Satara" }, { name: "Bijapur" }, { name: "Rampur" }, { name: "Shivamogga" }, { name: "Chandrapur" }, { name: "Junagadh" }, { name: "Thrissur" }, { name: "Alwar" }, { name: "Bardhaman" }, { name: "Kulti" }, { name: "Kakinada" }, { name: "Nizamabad" }, { name: "Parbhani" }, { name: "Tumkur" }, { name: "Khammam" }, { name: "Ozhukarai" }, { name: "Bihar Sharif" }, { name: "Panipat" }, { name: "Darbhanga" }, { name: "Bally" }, { name: "Aizawl" }, { name: "Dewas" }, { name: "Ichalkaranji" }, { name: "Karnal" }, { name: "Bathinda" }, { name: "Jalna" }, { name: "Eluru" }, { name: "Kirari Suleman Nagar" }, { name: "Barasat" }, { name: "Purnia" }, { name: "Satna" }, { name: "Mau" }, { name: "Sonipat" }, { name: "Farrukhabad" }, { name: "Sagar" }, { name: "Durg" }, { name: "Imphal" }, { name: "Ratlam" }, { name: "Hapur" }, { name: "Arrah" }, { name: "Karimnagar" }, { name: "Anantapur" }, { name: "Etawah" }, { name: "Ambernath" }, { name: "North Dumdum" }, { name: "Bharatpur" }, { name: "Begusarai" }, { name: "New Delhi" }, { name: "Gandhidham" }, { name: "Baranagar" }, { name: "Tiruvottiyur" }, { name: "Pondicherry" }, { name: "Sikar" }, { name: "Thoothukudi" }, { name: "Rewa" }, { name: "Mirzapur" }, { name: "Raichur" }, { name: "Pali" }, { name: "Ramagundam[35]" }, { name: "Haridwar" }, { name: "Vijayanagaram" }, { name: "Katihar" }, { name: "Nagercoil" }, { name: "Sri Ganganagar" }, { name: "Karawal Nagar" }, { name: "Mango" }, { name: "Thanjavur" }, { name: "Bulandshahr" }, { name: "Uluberia" }, { name: "Murwara" }, { name: "Sambhal" }, { name: "Singrauli" }, { name: "Nadiad" }, { name: "Secunderabad" }, { name: "Naihati" }, { name: "Yamunanagar" }, { name: "Bidhan Nagar" }, { name: "Pallavaram" }, { name: "Bidar" }, { name: "Munger" }, { name: "Panchkula" }, { name: "Burhanpur" }, { name: "Raurkela Industrial Township" }, { name: "Kharagpur" }, { name: "Dindigul" }, { name: "Gandhinagar" }, { name: "Hospet" }, { name: "Nangloi Jat" }, { name: "English Bazar" }, { name: "Ongole" }, { name: "Deoghar" }, { name: "Chapra" }, { name: "Haldia" }, { name: "Khandwa" }, { name: "Nandyal" }, { name: "Chittoor[36]" }, { name: "Morena" }, { name: "Amroha" }, { name: "Anand" }, { name: "Bhind" }, { name: "Bhalswa Jahangir Pur" }, { name: "Madhyamgram" }, { name: "Bhiwani" }, { name: "Navi Mumbai Panvel Raigad" }, { name: "Baharampur" }, { name: "Ambala" }, { name: "Morvi" }, { name: "Fatehpur" }, { name: "Rae Bareli" }, { name: "Khora" }, { name: "Bhusawal" }, { name: "Orai" }, { name: "Bahraich" }, { name: "Vellore" }, { name: "Mahesana" }, { name: "Raiganj" }, { name: "Sirsa" }, { name: "Danapur" }, { name: "Serampore" }, { name: "Sultan Pur Majra" }, { name: "Guna" }, { name: "Jaunpur" }, { name: "Panvel" }, { name: "Shivpuri" }, { name: "Surendranagar Dudhrej" }, { name: "Unnao" }, { name: "Hugli and Chinsurah" }, { name: "Alappuzha" }, { name: "Kottayam" }, { name: "Machilipatnam" }, { name: "Shimla" }, { name: "Adoni" }, { name: "Udupi" }, { name: "Tenali" }, { name: "Proddatur" }, { name: "Saharsa" }, { name: "Hindupur" }, { name: "Sasaram" }, { name: "Hajipur" }, { name: "Bhimavaram" }, { name: "Dehri" }, { name: "Madanapalle" }, { name: "Siwan" }, { name: "Bettiah" }, { name: "Guntakal" }, { name: "Srikakulam" }, { name: "Motihari" }, { name: "Dharmavaram" }, { name: "Gudivada" }, { name: "Narasaraopet" }, { name: "Suryapet" }, { name: "Bagaha" }, { name: "Tadipatri" }, { name: "Kishanganj" }, { name: "Karaikudi" }, { name: "Miryalaguda" }, { name: "Jamalpur" }, { name: "Kavali" }, { name: "Tadepalligudem" }, { name: "Amaravati" }, { name: "Buxar" }, { name: "Jehanabad" }, { name: "Gangtok" }];

  cls: string='home';
public imagesUrl;
homeval : string ="This is your home page.";
 constructor(private auth:AuthService){
  

 }
 
 OnLogOut()
 {
    this.auth.signOutUser();

 }
    ngOnInit() {
      
    
     
    firebase.initializeApp({


    apiKey: 'AIzaSyAD9rfaz4BIZn9GT87RMLmz2wwWk3r541U',
    authDomain: 'myfirstcontactproject.firebaseapp.com',
    databaseURL: 'https://myfirstcontactproject.firebaseio.com/',
    projectId: 'myfirstcontactproject',
    storageBucket: 'myfirstcontactproject.appspot.com',
    messagingSenderId: '411965487139'

    })
  
    }
    
  }