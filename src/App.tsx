import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImageGallery from './components/image-gallery/ImageGallery';
import MusicPlayer from './components/music-player/MusicPlayer';
import TodoList from './components/todo-list/TodoList';
import KakaoMap from './components/kakao-map/KakaoMap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/music" element={<MusicPlayer />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/kakao" element={<KakaoMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
