import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./InventoryListPage.css";
import { Section, BackgroundMain } from "../../Components/Utils/Utils";
import InventoryListItem from "../../Components/InventoryListItem/InventoryListItem";
import InventoryContext from "../../context/InventoryContext";
import InventoryApiService from "../../services/inventory-api-service";
import Header from "../../Components/Header/Header";
import TagsListItem from "../../Components/TagsListItem/TagsListItem";
import SearchBox from "../../Components/SearchBox/SearchBox";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import TokenService from "../../services/token-service";

class InventoryListPage extends Component {
  static contextType = InventoryContext;

  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  // user_id obtained from login. Then, only the specific user's
  // inventory list is set in the context provider, which populates the state
  // in App component, which then renders here.
  componentDidMount() {
    this.context.clearError();
    const token = TokenService.readJwtToken();
    InventoryApiService.getInventory(token.id).then(
      this.context.setInventoryList
    );
    InventoryApiService.getAllTags().then(this.context.setTagsList);
  }

  getInventoryListForTag(items, tag_name) {
    const tagName = tag_name;
    return !tagName ? items : items.filter(item => item.tag === tagName);
  }

  updateSearch = filter => {
    this.setState({ search: filter });
  };

  render() {
    const itemsForTag = this.getInventoryListForTag(
      this.context.inventoryList,
      this.props.match.params.tag_id
    );
    // If a tag/category is chosen, the search input filters
    // through items belonging to that tag/category only.
    const filteredItems = itemsForTag.filter(item => {
      return item.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    const { user_id } = this.props.match.params;
    const { error } = this.context;

    return (
      <BackgroundMain>
        <div className="container_inventory_list_page">
          <Header user_id={user_id}></Header>
          <ul className="tags_list">
            <ErrorBoundary>
              {error ? (
                <p className="red">There was an error, try again</p>
              ) : (
                this.context.tagsList.map(tag => (
                  <TagsListItem
                    key={tag.name}
                    tag={tag}
                    user_id={user_id}
                  ></TagsListItem>
                ))
              )}
            </ErrorBoundary>
          </ul>
          <div className="container_btn_show_all">
            <NavLink to={`/${user_id}/inventory`} className="btn_show_all">
              Show All
            </NavLink>
          </div>
          <SearchBox updateSearch={this.updateSearch}></SearchBox>

          <Section list className="inventory_list_main">
            {filteredItems.map(item => (
              <InventoryListItem
                key={item.name}
                item={item}
                cost_per_unit={parseInt(item.cost_per_unit)}
              />
            ))}
          </Section>
        </div>
      </BackgroundMain>
    );
  }
}

export default withRouter(InventoryListPage);
