import React from 'react'

const SocialMediaBox = ({ iconId, backgroundColor, link }) => {
    return (
        <a className={`${backgroundColor} p-2 size-12 sm:size:16 flex items-center justify-center 
        rounded-full hover:scale-105 transition-all`}
            href={link} target='_blank' title='Go to social media'>
            <svg width='28' height='28'>
                <use href={`/sprite.svg#${iconId}`} />
            </svg>
        </a>
    )
}

export default SocialMediaBox