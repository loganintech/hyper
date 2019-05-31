import test from 'ava';
import {get, recordState} from '../../app/config/windows.js';
import Window from '../../app/ui/window.js'


test('when checking "app/config/windows.js"', t => {

        t.true(
            get().position.length === 2
        );

        t.true(
            get().size.length === 2
        );

        t.true(
            get().size.reduce( (t, v) => {typeof v === 'number' && t }, true)
        );

        t.true(
            get().position.reduce( (t, v) => {typeof v === 'number' && t }, true)
        );

    }
);