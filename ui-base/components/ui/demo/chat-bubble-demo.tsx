import ChatBubble from "../chat-bubble/ChatBubble"

export default function ChatBubbleDemo() {
  return (
    <>
      <h1 className="my-4 font-bold">ChatBubble </h1>
      <ChatBubble>
        <ChatBubble.Header>
          Obi-Wan Kenobi <ChatBubble.Time>2 hours ago</ChatBubble.Time>
        </ChatBubble.Header>
        <ChatBubble.Avatar
          src="https://placeimg.com/192/192/people"
          fallback="JD"
        />
        <ChatBubble.Message>You were my brother, Anakin.</ChatBubble.Message>
        <ChatBubble.Footer>Seen</ChatBubble.Footer>
      </ChatBubble>
      <h1 className="my-4 font-bold"> ChatBubble with out avatar </h1>
      <ChatBubble>
        <ChatBubble.Message>
          It&apos;s over Anakin, <br />I have the high ground.
        </ChatBubble.Message>
      </ChatBubble>
      <ChatBubble end>
        <ChatBubble.Message>You underestimate my power!</ChatBubble.Message>
      </ChatBubble>
      <h1 className="my-4 font-bold"> ChatBubble with Avatar </h1>
      <ChatBubble>
        <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
        <ChatBubble.Message>
          It was said that you would, destroy the Sith, not join them.
        </ChatBubble.Message>
      </ChatBubble>
      <ChatBubble>
        <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
        <ChatBubble.Message>
          It was you who would bring balance to the Force
        </ChatBubble.Message>
      </ChatBubble>
      <ChatBubble>
        <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
        <ChatBubble.Message>Not leave it in Darkness</ChatBubble.Message>
      </ChatBubble>
      <h1 className="my-4 font-bold"> ChatBubble Start/End </h1>
      <>
        <ChatBubble>
          <ChatBubble.Header>
            Obi-Wan Kenobi <ChatBubble.Time>12:45</ChatBubble.Time>
          </ChatBubble.Header>
          <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
          <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
        </ChatBubble>

        <ChatBubble end>
          <ChatBubble.Header>
            Anakin <ChatBubble.Time>12:46</ChatBubble.Time>
          </ChatBubble.Header>
          <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
          <ChatBubble.Message>I hate you!</ChatBubble.Message>
        </ChatBubble>
      </>
      <h1 className="my-4 font-bold">ChatBubble Footer, and Avatar</h1>
      <>
        <ChatBubble>
          <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
          <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
          <ChatBubble.Footer>Delivered</ChatBubble.Footer>
        </ChatBubble>

        <ChatBubble end>
          <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
          <ChatBubble.Message>I hate you!</ChatBubble.Message>
          <ChatBubble.Footer>Seen at 12:46</ChatBubble.Footer>
        </ChatBubble>
      </>
      <h1 className="my-4 font-bold">ChatBubble Header, Footer</h1>
      <ChatBubble>
        <ChatBubble.Header>
          Obi-Wan Kenobi <ChatBubble.Time>12:45</ChatBubble.Time>
        </ChatBubble.Header>
        <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
        <ChatBubble.Footer>Delivered</ChatBubble.Footer>
      </ChatBubble>

      <ChatBubble end>
        <ChatBubble.Header>
          Anakin <ChatBubble.Time>12:46</ChatBubble.Time>
        </ChatBubble.Header>
        <ChatBubble.Message>I hate you!</ChatBubble.Message>
        <ChatBubble.Footer>Seen at 12:46</ChatBubble.Footer>
      </ChatBubble>
      <h1 className="my-4 font-bold">ChatBubble Message color</h1>
      <>
        <ChatBubble>
          <ChatBubble.Message color="primary">
            What kind of nonsense is this
          </ChatBubble.Message>
        </ChatBubble>

        <ChatBubble>
          <ChatBubble.Message color="secondary">
            Put me on the Council and not make me a Master!??
          </ChatBubble.Message>
        </ChatBubble>

        <ChatBubble>
          <ChatBubble.Message color="accent">
            That&apos;s never been done in the history of the Jedi. It&apos;s
            insulting!
          </ChatBubble.Message>
        </ChatBubble>

        <ChatBubble end>
          <ChatBubble.Message color="info">
            Calm down, Anakin.
          </ChatBubble.Message>
        </ChatBubble>

        <ChatBubble end>
          <ChatBubble.Message color="success">
            You have been given a great honor.
          </ChatBubble.Message>
        </ChatBubble>

        <ChatBubble end>
          <ChatBubble.Message color="warning">
            To be on the Council at your age.
          </ChatBubble.Message>
        </ChatBubble>

        <ChatBubble end>
          <ChatBubble.Message color="error">
            It&apos;s never happened before.
          </ChatBubble.Message>
        </ChatBubble>
      </>
    </>
  )
}
