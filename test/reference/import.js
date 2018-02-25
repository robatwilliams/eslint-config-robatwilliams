/* eslint-disable no-unused-vars */
// external modules
import a from 'a';
import b from 'b';
import PropTypes from 'prop-types';
import React from 'react';

// internal modules
import permissions from 'common/permissions';
import { handyThing } from 'common/util';
// ESLint sort-imports would do the members but also does other unwanted things
import { d, e, f } from 'common/membersAlphabetically';

// parents (don't go more than 1-2 levels)
import otherThing from '../otherThing';
import otherThing2 from '../otherThing2';

// siblings or their children
import sibling1 from './sibling1';
import sibling2 from './sibling2';
import siblingChild from './sibling3/child';
