const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, can't find that page!</p>
                <div>
                    <img className='flower404' src='/images/404img.avif' alt='404flower'></img>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404

