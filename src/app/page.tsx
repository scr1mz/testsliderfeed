import React from 'react'
import Slider from '../components/Slider/Slider'
import mockData from '../assets/data/mockData'
import './page.scss'

export default function Home () {
    return (
        <main className={'main_content'}>
            <section className={'main_content__container'}>
                <h1>Полезные материалы</h1>
                <p>Собрали для вас полезные исследования схемы кормления и другие материалы,
                    которые пригодятся для лучших результатов на вашем хозяйстве</p>
                <Slider slides={mockData} />
            </section>
        </main>
    )
}
