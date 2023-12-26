export interface IActivity {
  id: number
  title: string
  text: string
  file: { name: string; type: string; content: string; size: string }
}

export interface IDoubt {
  author: { avatar: string; name: string }
  description: string
  date: string
  reply: {
    author: { avatar: string; name: string }
    description: string
    date: string
  }
}

export interface IActivityAnswer {
  author: { avatar: string; name: string }
  date: string
  answer: string
  activity: IActivity
  reply: {
    author: { avatar: string; name: string }
    description: string
    date: string
  }
}
