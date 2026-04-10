import React, { useEffect } from 'react';

const NiceSelect = () => {
    useEffect(() => {

        $('select').niceSelect();
            
    }, []);
    return (
        <>
            <div class="language-switcher">
                <div id="polyglotLanguageSwitcher">
                    <form action="#">
                        <select id="polyglot-language-options">
                            <option id="en" value="en" selected>England</option>
                            <option id="fr" value="fr">France</option>
                            <option id="de" value="de">Germany</option>
                            <option id="it" value="it">Italy</option>
                            <option id="es" value="es">Span</option>
                        </select>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NiceSelect;