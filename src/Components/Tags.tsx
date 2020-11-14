import React from 'react';
import { Tag } from 'antd';
import { connect } from 'react-redux';
import { changeActiveTagsAction } from '../redux/actions';
import reduxState from '../redux/types';

const { CheckableTag } = Tag;

const tagsData = ['All', '1', '2', '3'];

interface TagsProps {
    activeTags: string[]
    changeActiveTagsAction: (tags:string[]) => void
}

class Tags extends React.Component<TagsProps> {
    state = {
    selectedTags: ['All'],
  };

  handleChange(tag: string, checked: boolean) {
    const { activeTags } = this.props;
    if(tag === 'All') {
        this.props.changeActiveTagsAction(['All'])
    }
    else {
        const nextSelectedTags = checked ? [...activeTags, tag] : activeTags.filter(t => t !== tag);
        const nextSelectedTagsFiltered = nextSelectedTags.filter(t => t !== 'All')
        if(nextSelectedTagsFiltered.length === 0) {
            this.props.changeActiveTagsAction(['All'])
        }
        else {
            this.props.changeActiveTagsAction(nextSelectedTagsFiltered)
        }
    }
  }

  render() {
    return (
      <>
        <span style={{ marginRight: 8 }}>Categories:</span>
        {tagsData.map(tag => (
          <CheckableTag
            key={tag}
            checked={this.props.activeTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </>
    );
  }
}

function mapStateToProps(state:reduxState) {
    return {
        activeTags: state.activeTags
    }
}
// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
    return {
        changeActiveTagsAction: (tags:string[]) => dispatch(changeActiveTagsAction(tags))
    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tags);
export { connectedComponent as Tags };