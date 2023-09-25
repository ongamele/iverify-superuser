import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      name
      surname
      idNumber
      email
      phoneNumber
      municipality
      status
      createdAt
    }
  }
`;

export const GET_APPLICATIONS = gql`
  query getApplications($userId: String!) {
    getApplications(userId: $userId) {
      id
      userId
      name
      surname
      email
      phoneNumber
      address
      postalCode
      country
      municipalAcc
      race
      houseHoldHead
      maritalStatus
      dependents
      bankStatement
      idBook
      affidavid
      status
      createdAt
    }
  }
`;

export const GET_SUCCESSFUL_APPLICATIONS = gql`
  query getSuccessfulApplications($userId: String!) {
    getSuccessfulApplications(userId: $userId)
  }
`;

export const GET_FAILED_APPLICATIONS = gql`
  query getFailedApplications($userId: String!) {
    getFailedApplications(userId: $userId)
  }
`;

export const GET_ALL_APPLICATIONS = gql`
  query getAllApplications($userId: String!) {
    getAllApplications(userId: $userId)
  }
`;

export const GET_LATEST_APPLICATIONS = gql`
  query getLatestApplications($userId: String!) {
    getLatestApplications(userId: $userId)
  }
`;
