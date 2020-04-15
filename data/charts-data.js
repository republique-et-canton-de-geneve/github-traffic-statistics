/*
 * github-traffic-statistics
 *
 * Copyright (C) 2020 République et canton de Genève
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const chvoteData = [
  ['May 2018', 4, 61],
  ['Jun 2018', 2, 50],
  ['Jul 2018', 4, 31],
  ['Aug 2018', 3, 20],
  ['Sep 2018', 4, 41],
  ['Oct 2018', 2, 30],
  ['Nov 2018', 4, 35],
  ['Dec 2018', 3, 83],
  ['Jan 2019', 1, 26],
  ['Feb 2019', 3, 83],
  ['Mar 2019', 9, 108],
  ['Apr 2019', 8, 54],
  ['May 2019', 4, 62],
  ['Jun 2019', 3, 62],
  ['Jul 2019', 3, 50],
  ['Aug 2019', 9, 48],
  ['Sep 2019', 3, 44],
  ['Oct 2019', 3, 60],
  ['Nov 2019', 4, 45],
  ['Jan 2020', 3, 61],
  ['Feb 2020', 4, 94],
  ['Mar 2020', 6, 50],
  ['Apr 2020', 8, 91],
];

const chvoteProtocolPocData = [
  ['May 2018', 0, 23],
  ['Jun 2018', 1, 26],
  ['Jul 2018', 1, 21],
  ['Aug 2018', 1, 10],
  ['Sep 2018', 0, 11],
  ['Oct 2018', 1, 15],
  ['Nov 2018', 0, 18],
  ['Dec 2018', 1, 21],
  ['Jan 2019', 1, 6],
  ['Feb 2019', 0, 27],
  ['Mar 2019', 2, 18],
  ['May 2019', 3, 16],
  ['Jun 2019', 1, 18],
  ['Aug 2019', 6, 8],
  ['Sep 2019', 0, 3],
  ['Oct 2019', 0, 9],
  ['Nov 2019', 2, 7],
  ['Jan 2020', 3, 13],
  ['Feb 2020', 2, 17],
  ['Mar 2020', 1, 9],
  ['Apr 2020', 1, 14],
];

const edgSitgMapData = [
  ['May 2018', 0, 2],
  ['Jun 2018', 2, 5],
  ['Jul 2018', 0, 0],
  ['Aug 2018', 1, 1],
  ['Sep 2018', 0, 2],
  ['Oct 2018', 0, 0],
  ['Nov 2018', 1, 0],
  ['Dec 2018', 0, 1],
  ['Jan 2019', 1, 1],
  ['Feb 2019', 0, 1],
  ['Mar 2019', 1, 0],
  ['Apr 2019', 1, 2],
  ['May 2019', 0, 0],
  ['Jun 2019', 0, 2],
  ['Aug 2019', 1, 1],
  ['Sep 2019', 1, 1],
  ['Oct 2019', 0, 2],
  ['Nov 2019', 0, 1],
  ['Jan 2020', 0, 1],
  ['Feb 2020', 1, 0],
  ['Mar 2020', 0, 2],
  ['Apr 2020', 1, 0],
];

const sedexMessageHandlerData = [
  ['May 2018', 1, 2],
  ['Jun 2018', 1, 3],
  ['Jul 2018', 0, 0],
  ['Aug 2018', 2, 2],
  ['Sep 2018', 0, 2],
  ['Oct 2018', 1, 5],
  ['Nov 2018', 0, 3],
  ['Dec 2018', 0, 3],
  ['Jan 2019', 0, 0],
  ['Feb 2019', 0, 2],
  ['Mar 2019', 1, 2],
  ['Apr 2019', 0, 6],
  ['May 2019', 1, 3],
  ['Jun 2019', 1, 2],
  ['Aug 2019', 2, 6],
  ['Sep 2019', 2, 1],
  ['Oct 2019', 0, 1],
  ['Nov 2019', 2, 7],
  ['Jan 2020', 0, 7],
  ['Feb 2020', 0, 4],
  ['Mar 2020', 3, 7],
  ['Apr 2020', 0, 8],
];

const logChainerData = [
  ['Jun 2018', 0, 1],
  ['Jul 2018', 0, 1],
  ['Aug 2018', 0, 0],
  ['Sep 2018', 0, 4],
  ['Oct 2018', 0, 1],
  ['Nov 2018', 0, 2],
  ['Dec 2018', 0, 1],
  ['Jan 2019', 0, 1],
  ['Feb 2019', 0, 1],
  ['Mar 2019', 1, 1],
  ['Apr 2019', 3, 0],
  ['May 2019', 0, 0],
  ['Jun 2019', 0, 0],
  ['Aug 2019', 0, 0],
  ['Sep 2019', 0, 1],
  ['Oct 2019', 1, 1],
  ['Nov 2019', 2, 0],
  ['Jan 2020', 0, 1],
  ['Feb 2020', 0, 3],
  ['Mar 2020', 0, 0],
  ['Apr 2020', 0, 0],
];

const squeletteGithubData = [
  ['Jun 2018', 0, 3],
  ['Jul 2018', 0, 0],
  ['Aug 2018', 0, 0],
  ['Sep 2018', 0, 3],
  ['Nov 2018', 0, 0],
  ['Dec 2018', 0, 0],
  ['Jan 2019', 1, 2],
  ['Feb 2019', 0, 2],
  ['Mar 2019', 1, 2],
  ['Apr 2019', 1, 0],
  ['May 2019', 1, 1],
  ['Aug 2019', 0, 0],
  ['Sep 2019', 1, 0],
  ['Oct 2019', 1, 1],
  ['Nov 2019', 0, 0],
  ['Jan 2020', 0, 0],
  ['Feb 2020', 1, 1],
  ['Mar 2020', 0, 1],
  ['Apr 2020', 0, 2],
];

const joursFeriesData = [
  ['Nov 2018', 1, 4],
  ['Dec 2018', 1, 2],
  ['Jan 2019', 0, 2],
  ['Feb 2019', 1, 3],
  ['Mar 2019', 1, 1],
  ['Apr 2019', 1, 1],
  ['May 2019', 1, 7],
  ['Jun 2019', 1, 2],
  ['Sep 2019', 1, 0],
  ['Oct 2019', 1, 2],
  ['Nov 2019', 1, 2],
  ['Jan 2020', 0, 4],
  ['Feb 2020', 0, 2],
  ['Mar 2020', 0, 1],
  ['Apr 2020', 0, 1],
];

const referentielsOfsData = [
  ['Jan 2019', 1, 1],
  ['Feb 2019', 1, 0],
  ['Mar 2019', 1, 2],
  ['Apr 2019', 1, 3],
  ['May 2019', 0, 0],
  ['Jun 2019', 1, 3],
  ['Aug 2019', 1, 2],
  ['Sep 2019', 1, 0],
  ['Oct 2019', 1, 2],
  ['Nov 2019', 1, 2],
  ['Jan 2020', 0, 4],
  ['Feb 2020', 0, 2],
  ['Mar 2020', 1, 0],
  ['Apr 2020', 0, 2],
];

const blockchainDocumentHorodateurData = [
  ['Jan 2019', 1, 1],
  ['Feb 2019', 1, 5],
  ['Mar 2019', 1, 10],
  ['Apr 2019', 2, 3],
  ['May 2019', 0, 2],
  ['Jun 2019', 2, 2],
  ['Aug 2019', 1, 1],
  ['Sep 2019', 1, 1],
  ['Oct 2019', 2, 4],
  ['Nov 2019', 4, 7],
  ['Jan 2020', 0, 5],
  ['Feb 2020', 1, 5],
  ['Mar 2020', 0, 3],
  ['Apr 2020', 1, 1],
];

const pythonRedhatVirtualizationData = [
  ['Feb 2019', 1, 2],
  ['Mar 2019', 1, 0],
  ['Apr 2019', 1, 0],
  ['May 2019', 0, 0],
  ['Jun 2019', 1, 0],
  ['Aug 2019', 0, 0],
  ['Sep 2019', 0, 0],
  ['Oct 2019', 0, 1],
  ['Nov 2019', 1, 0],
  ['Jan 2020', 2, 0],
  ['Feb 2020', 0, 1],
  ['Mar 2020', 0, 1],
  ['Apr 2020', 0, 0],
];

const ginaLdapClientData = [
  ['Mar 2019', 1, 1],
  ['Apr 2019', 0, 4],
  ['May 2019', 0, 1],
  ['Jun 2019', 1, 0],
  ['Aug 2019', 0, 0],
  ['Sep 2019', 2, 2],
  ['Oct 2019', 0, 2],
  ['Nov 2019', 2, 2],
  ['Jan 2020', 0, 3],
  ['Feb 2020', 0, 0],
  ['Mar 2020', 0, 3],
  ['Apr 2020', 0, 3],
];

const xxegePurgeData = [
  ['Jun 2019', 0, 1],
  ['Aug 2019', 1, 0],
  ['Sep 2019', 1, 0],
  ['Oct 2019', 0, 0],
  ['Nov 2019', 1, 0],
  ['Jan 2020', 0, 0],
  ['Feb 2020', 1, 0],
  ['Mar 2020', 0, 0],
  ['Apr 2020', 0, 0],
];

const gitSyncData = [
  ['Jun 2019', 4, 2],
  ['Aug 2019', 2, 1],
  ['Sep 2019', 1, 1],
  ['Oct 2019', 0, 2],
  ['Nov 2019', 1, 1],
  ['Jan 2020', 0, 1],
  ['Feb 2020', 1, 0],
  ['Mar 2020', 1, 1],
  ['Apr 2020', 0, 0],
];

const wlsSystemdScriptsData = [
  ['Aug 2019', 1, 0],
  ['Sep 2019', 0, 0],
  ['Oct 2019', 1, 0],
  ['Nov 2019', 3, 0],
  ['Jan 2020', 0, 0],
  ['Feb 2020', 0, 0],
  ['Mar 2020', 0, 2],
  ['Apr 2020', 0, 1],
];

const githubTrafficStatisticsData = [
  ['Mar 2020', 0, 2],
  ['Apr 2020', 1, 3],
];
