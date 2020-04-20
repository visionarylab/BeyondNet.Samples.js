import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import {
  showFormMsg,
  mealInputMsg,
  caloriesInputMsg,
  saveMealMsg,
} from './Update';

const { pre, div, h1, button, form, label, input } = hh(h);

function fieldSet(labeltext, inputValue, oninput) {
  return div([
    label({ className: 'db mb1', labeltext }),
    input({
      className: 'pa2 input-reset ba w-100 mb2',
      type: 'text',
      value: inputValue,
      oninput,
    }),
  ]);
}

function buttonSet(dispatch) {
  return div([
    button({ className: 'f3 pv2 ph3 bg-blue white bn' }, 'Save'),
    button(
      {
        className: 'f3 pv2 ph3 bg-light-gray dim',
        onclick: () => dispatch(showFormMsg(false)),
      },
      'Cancel'
    ),
  ]);
}

function formView(dispatch, model) {
  const { description, calories, showForm } = model;

  if (showForm) {
    return form(
      {
        className: 'w-100 mv2',
        onsubmit: (e) => {
          e.preventDefault();
          dispatch(saveMealMsg);
        },
      },
      [
        fieldSet('meal', description, (e) =>
          dispatch(mealInputMsg(e.target.value))
        ),
        fieldSet('calories:', calories || '', (e) =>
          dispatch(caloriesInputMsg(e.target.value))
        ),
        buttonSet(dispatch),
      ]
    );
  }

  return button(
    {
      className: 'f3 pv2 ph3 bg-blue white bn',
      onclick: () => dispatch(showFormMsg(true)),
    },
    'Add meal'
  );
}

function view(dispatch, model) {
  return div({ className: 'mv6 center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Calorie Counter'),
    formView(dispatch, model),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;
