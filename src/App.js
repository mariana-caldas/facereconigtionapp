import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import particlesOptions from './particlesOptions';
import Particles from 'react-particles-js'; 
import './App.css';

const app = new Clarifai.App({
 apiKey: '4f4a1abac428428d8b0071315b762030'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input});
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response.outputs[0]);
      },
      function(err) {
        // there was an error
      }
    );
  }

  render(){
    return (
      <div className="App">
        <Particles className ='particles'
        params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
