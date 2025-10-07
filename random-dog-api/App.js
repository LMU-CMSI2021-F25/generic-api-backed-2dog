import { useState, useEffect } from "react";
import { Animated, TouchableOpacity, Text, View } from "react-native";
import "./styles.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [Rbreed, setBreed] = useState(["s/image"]);
  const opacity = useState(new Animated.Value(1))[0];

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const makeAPICall = () => {
    const url = `https://dog.ceo/api/breed${Rbreed}/random`;
    fetch(url)
      .then((r) => r.json())
      .then((response) => {
        setImages(response.message);
      });
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  const generate = async () => {
    fadeOut();
    await delay(500);
    makeAPICall();
    await delay(500);
    fadeIn();
  };

  const changeBreed = (event) => {
    setBreed(event.target.value);
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <div className="App">
      <h1>Random Dog API</h1>

      <ul class="flex-container">
        <li class="flex-item">
          Dog Breed:
          <select name="dog_breed" id="breed" onChange={changeBreed}>
            <option value="s/image">Random</option>
            <option value="/affenpinscher/images">Affenpinscher</option>
            <option value="/african/wild/images">Wild African</option>
            <option value="/airedale/images">Airedale</option>
            <option value="/akita/images">Akita</option>
            <option value="/appenzeller/images">Appenzeller</option>
            <option value="/australian/kelpie/images">Australian Kelpie</option>
            <option value="/australian/shepherd/images">
              Australian Shepherd
            </option>
            <option value="/bakharwal/indian/images">Bakharwal Indian</option>
            <option value="/basenji/images">Basenji</option>
            <option value="/beagle/images">Beagle</option>
            <option value="/bluetick/images">Bluetick</option>
            <option value="/borzoi/images">Borzoi</option>
            <option value="/bouvier/images">Bouvier</option>
            <option value="/boxer/images">Boxer</option>
            <option value="/brabancon/images">Brabancon</option>
            <option value="/briard/images">Briard</option>
            <option value="/buhund/norwegian/images">Norwegian Buhund</option>
            <option value="/bulldog/boston/images">Boston Bulldog</option>
            <option value="/bulldog/english/images">English Bulldog</option>
            <option value="/bulldog/french/images">French Bulldog</option>
            <option value="/bullterrier/staffordshire/images">
              Staffordshire Bullterrier
            </option>
            <option value="/cattledog/australian/images">
              Australian Cattledog
            </option>
            <option value="/cavapoo/images">Cavapoo</option>
            <option value="/chihuahua/images">Chihuahua</option>
            <option value="/chippiparai/indian/images">
              Indian Chippiparai
            </option>
            <option value="/chow/images">Chow</option>
            <option value="/clumber/images">Clumber</option>
            <option value="/cockapoo/images">Cockapoo</option>
            <option value="/collie/border/images">Border Collie</option>
            <option value="/coonhound/images">Coonhound</option>
            <option value="/corgi/cardigan/images">Cardigan Corgi</option>
            <option value="/cotondetulear/images">Cotondetulear</option>
            <option value="/dachshund/images">Dachshund</option>
            <option value="/dalmatian/images">Dalmatian</option>
            <option value="/dane/great/images">Great Dane</option>
            <option value="/danish/swedish/images">Swedish Danish</option>
            <option value="/deerhound/scottish/images">
              Scottish Deerhound
            </option>
            <option value="/dhole/images">Dhole</option>
            <option value="/dingo/images">Dingo</option>
            <option value="/doberman/images">Doberman</option>
            <option value="/elkhound/norwegian/images">
              Norwegian Elkhound
            </option>
            <option value="/entlebucher/images">Entlebucher</option>
            <option value="/eskimo/images">Eskimo</option>
            <option value="/finnish/lapphund/images">Finnish Lapphund</option>

            <option value="/frise/bichon/images">Bichon Frise</option>
            <option value="/gaddi/indian/images">Indian Gaddi</option>
            <option value="/german/shepherd/images">German Shepherd</option>
            <option value="/greyhound/indian/images">Indian Greyhound</option>
            <option value="/greyhound/italian/images">Italian Greyhound</option>
            <option value="/groenendael/images">Groenendael</option>
            <option value="/havanese/images">Havanese</option>
            <option value="/hound/afghan/images">Afghan Hound</option>
            <option value="/hound/basset/images">basset Hound</option>
            <option value="/hound/blood/images">Blood Hound</option>
            <option value="/hound/english/images">English Hound</option>
            <option value="/hound/ibizan/images">Ibizan Hound</option>
            <option value="/hound/plott/images">Plott Hound</option>
            <option value="/hound/walker/images">Walker Hound</option>
            <option value="/husky/images">Husky</option>
            <option value="/keeshond/images">Keeshond</option>
            <option value="/kelpie/images">Kelpie</option>
            <option value="/kombai/images">Kombai</option>
            <option value="/komondor/images">Komondor</option>
            <option value="/kuvasz/images">Kuvasz</option>
            <option value="/labradoodle/images">Labradoodle</option>
            <option value="/labrador/images">Labrador</option>
            <option value="/leonberg/images">Leonberg</option>
            <option value="/lhasa/images">Lhasa</option>
            <option value="/malamute/images">Malamute</option>
            <option value="/malinois/images">Malinois</option>
            <option value="/maltese/images">Maltese</option>
            <option value="/mastiff/bull/images">Bull Mastiff</option>
            <option value="/mastiff/english/images">English Mastiff</option>
            <option value="/mastiff/indian/images">Indian Mastiff</option>
            <option value="/mastiff/tibetan/images">Tibetan Mastiff</option>
            <option value="/mexicanhairless/images">Mexicanhairless</option>
            <option value="/mix/images">Mix</option>
            <option value="/mountain/bernese/images">Bernese Mountain</option>
            <option value="/mountain/swiss/images">Swiss Mountain</option>
            <option value="/mudhol/indian/images">Indian Mudhol</option>
            <option value="/newfoundland/images">Newfoundland</option>
            <option value="/otterhound/images">Otterhound</option>
            <option value="/ovcharka/caucasian/images">
              Caucasian Ovcharka
            </option>
            <option value="/papillon/images">Papillon</option>
            <option value="/pariah/indian/images">Indian Pariah</option>
            <option value="/pekinese/images">Pekinese</option>
            <option value="/pembroke/images">Pembroke</option>
            <option value="/pinscher/miniature/images">
              Piniature Pinscher
            </option>
            <option value="/pitbull/images">Pitbull</option>
            <option value="/pointer/german/images">German Pointer</option>
            <option value="/pointer/germanlonghair/images">
              Germanlonghair Pointer
            </option>
            <option value="/pomeranian/images">Pomeranian</option>
            <option value="/poodle/medium/images">Medium Poodle</option>
            <option value="/poodle/miniature/images">Miniature Poodle</option>
            <option value="/poodle/standard/images">Standard Poodle</option>
            <option value="/poodle/toy/images">Toy Poodle</option>
            <option value="/pug/images">Pug</option>
            <option value="/puggle/images">Puggle</option>
            <option value="/pyrenees/images">Pyrenees</option>
            <option value="/rajapalayam/indian/images">
              Indian Rajapalayam
            </option>
            <option value="/redbone/images">Redbone</option>
            <option value="/retriever/chesapeake/images">
              Chesapeake Retriever
            </option>
            <option value="/retriever/curly/images">Curly Retriever</option>
            <option value="/retriever/flatcoated/images">
              Flatcoated Retriever
            </option>
            <option value="/retriever/golden/images">Golden Retriever</option>
            <option value="/ridgeback/rhodesian/images">
              Rhodesian Ridgeback
            </option>
            <option value="/rottweiler/images">Rottweiler</option>
            <option value="/rough/collieimages">Collie Rough</option>
            <option value="/saluki/images">Saluki</option>
            <option value="/samoyed/images">Samoyed</option>
            <option value="/schipperke/images">Schipperke</option>
            <option value="/schnauzer/giant/images">Giant Schnauzer</option>
            <option value="/schnauzer/miniature/images">
              Miniature Schnauzer
            </option>
            <option value="/segugio/italian/images">Italian Segugio</option>
            <option value="/setter/english/images">English Setter</option>
            <option value="/setter/gordon/images">Gordon Setter</option>
            <option value="/setter/irish/images">Irish Setter</option>
            <option value="/sharpei/images">Sharpei</option>
            <option value="/sheepdog/english/images">English Sheepdog</option>
            <option value="/sheepdog/indian/images">Indian Sheepdog</option>
            <option value="/sheepdog/shetland/images">Shetland Sheepdog</option>
            <option value="/shiba/images">Shiba</option>
            <option value="/shihtzu/images">Shihtzu</option>
            <option value="/spaniel/blenheim/images">Blenheim Spaniel</option>
            <option value="/spaniel/brittany/images">Brittany Spaniel</option>
            <option value="/spaniel/cocker/images">Cocker Spaniel</option>
            <option value="/spaniel/irish/images">Irish Spaniel</option>
            <option value="/spaniel/japanese/images">Japanese Spaniel</option>
            <option value="/spaniel/sussex/images">Sussex Spaniel</option>
            <option value="/spaniel/welsh/images">Welsh Spaniel</option>
            <option value="/spitz/indian/images">Indian Spitz</option>
            <option value="/spitz/japanese/images">Japanese Spitz</option>
            <option value="/springer/english/images">English Springer</option>
            <option value="/stbernard/images">stbernard</option>
            <option value="/terrier/images">Terrier</option>
            <option value="/terrier/american/images">American Terrier</option>
            <option value="/terrier/andalusian/images">
              Andalusian Terrier
            </option>
            <option value="/terrier/australian/images">
              Australian Terrier
            </option>
            <option value="/terrier/bedlington/images">
              Bedlington Terrier
            </option>
            <option value="/terrier/border/images">Border Terrier</option>
            <option value="/terrier/boston/images">Boston Terrier</option>
            <option value="/terrier/cairn/images">Cairn Terrier</option>
            <option value="/terrier/dandie/images">Dandie Terrier</option>
            <option value="/terrier/fox/images">Fox Terrier</option>
            <option value="/terrier/irish/images">Irish Terrier</option>
            <option value="/terrier/kerryblue/images">Kerryblue Terrier</option>
            <option value="/terrier/lakeland/images">Lakeland Terrier</option>
            <option value="/terrier/norfolk/images">Norfolk Terrier</option>
            <option value="/terrier/norwich/images">Norwich Terrier</option>
            <option value="/terrier/patterdale/images">
              Patterdale Terrier
            </option>
            <option value="/terrier/russell/images">Russell Terrier</option>
            <option value="/terrier/scottish/images">Scottish Terrier</option>
            <option value="/terrier/sealyham/images">Sealyham Terrier</option>
            <option value="/terrier/silky/images">Silky Terrier</option>
            <option value="/terrier/tibetan/images">Tibetan Terrier</option>
            <option value="/terrier/toy/images">Toy Terrier</option>
            <option value="/terrier/welsh/images">Welsh Terrier</option>
            <option value="/terrier/westhighland/images">
              Westhighland Terrier
            </option>
            <option value="/terrier/wheaten/images">Wheaten Terrier</option>
            <option value="/terrier/yorkshire/images">Yorkshire Terrier</option>
            <option value="/tervuren/images">Tervuren</option>
            <option value="/vizsla/images">Vizsla</option>
            <option value="/waterdog/spanish/images">Spanish Waterdog</option>
            <option value="/weimaraner/images">Weimaraner</option>
            <option value="/whippet/images">Whippet</option>
            <option value="/wolfhound/irish/images">Irish Wolfhound</option>
          </select>
        </li>

        <li class="flex-item">
          <button class="button" onClick={generate}>
            Generate!
          </button>
        </li>

        <Animated.View style={[{ opacity: opacity }]}>
          <li class="image-container">
            <img src={images} width="500vw" height="500vh" />
          </li>
        </Animated.View>
      </ul>
      <footer>
        <h6>https://codesandbox.io/</h6>
      </footer>
    </div>
  );
}
