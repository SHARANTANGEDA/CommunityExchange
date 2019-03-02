const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  avatar: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  //TODO Add image functionality
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      avatar: {
        type: String
      },
      text: {
        type: String,
        required: true
      },
      userId: {
        type: String,
        required: true
      },
      time: {
        type: Date,
        default: Date.now
      }
    }
  ],
  answer: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      avatar: {
        type: String
      },
      userId: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      //TODO Add image functionality

      comments: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
          },
          text: {
            type: String,
            required: true
          },
          firstName: {
            type: String
          },
          lastName: {
            type: String
          },
          avatar: {
            type: String
          },
          userId: {
            type: String,
            required: true
          },
          time: {
            type: Date,
            default: Date.now
          }
        }
      ],
      time: {
        type: Date,
        default: Date.now
      }
    }
  ]
})
module.exports = Question = mongoose.model('question', QuestionSchema)