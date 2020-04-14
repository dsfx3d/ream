export default {
  functional: true,
  render(h, { props: { error } }) {
    return h(
      'div',
      {
        style: {
          border: `1px solid red`,
          padding: `20px`,
          maxWidth: `600px`,
          margin: `20px auto`,
        },
      },
      [
        h(
          'div',
          {
            style: {
              color: `red`,
            },
          },
          [`Error: ${error.statusCode}`]
        ),
        h(
          'pre',
          {
            style: {
              overflow: `auto`,
            },
          },
          [error.stack]
        ),
      ]
    )
  },
}
