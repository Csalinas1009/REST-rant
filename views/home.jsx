const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <link rel='stylesheet' href='/css/style.css'></link>
                <h1>Home</h1>
                <div>
                    <img className='birdup' src='/images/mikhail-vasilyev-gGC63oug3iY-unsplash.jpg'></img>
                </div>
            </main>
        </Def>
    )
}

module.exports = home