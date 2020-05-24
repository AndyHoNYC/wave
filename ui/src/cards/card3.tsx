import React from 'react';
import { stylesheet } from 'typestyle';
import { cards, Format } from '../grid';
import { bond, Card, Rec, S } from '../telesync';
import { getTheme } from '../theme';

const
  theme = getTheme(),
  css = stylesheet({
    card: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      ...theme.font.s12,
      ...theme.font.w6,
    },
    values: {
      display: 'flex',
      alignItems: 'baseline',
    },
    value: {
      ...theme.font.s40,
      ...theme.font.w2,
    },
    aux_value: {
      marginLeft: 5,
      color: theme.colors.text6,
    },
    caption: {
      ...theme.font.s13,
      color: theme.colors.text5,
    }
  })

interface State {
  title: S
  value: S
  aux_value: S
  caption: S
  data: Rec
}

const defaults: Partial<State> = {
  title: 'Untitled',
  caption: 'No description available',
}

const
  View = bond(({ state, changed }: Card<State>) => {
    const
      render = () => {
        const s = theme.merge(defaults, state)
        return (
          <div className={css.card}>
            <div className={css.title}>
              <Format data={s.data} format={s.title} />
            </div>
            <div className={css.values}>
              <div className={css.value}>
                <Format data={s.data} defaultValue={s.value} format={s.value} />
              </div>
              <div className={css.aux_value}>
                <Format data={s.data} format={s.aux_value} />
              </div>
            </div>
            <div className={css.caption}>
              <Format data={s.data} format={s.caption} />
            </div>
          </div>
        )
      }
    return { render, changed }
  })

cards.register('card3', View)
