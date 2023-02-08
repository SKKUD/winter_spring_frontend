import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './Search';
import Mypage from './Mypage';
import Lyric from './Lyric';
import Home from './Home';
import Header from '../components/common/Header';

export default function Main() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/lyric" element={<Lyric />} />
            </Routes>
        </>
    );
}
